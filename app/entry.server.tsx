import { renderToPipeableStream } from 'react-dom/server';
import { PassThrough } from 'stream';
import isbot from 'isbot';
import { EntryContext, HandleDataRequestFunction } from '@remix-run/server-runtime';
import { RemixServer } from '@remix-run/react';
import { cors } from "remix-utils/cors";

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
	let callbackName = isbot(request.headers.get("user-agent"))
		? "onAllReady"
		: "onShellReady";

	return new Promise((resolve, reject) => {
		let didError = false;

		let { pipe, abort } = renderToPipeableStream(
			<RemixServer context={remixContext} url={request.url} />,
			{
				[callbackName]: () => {
					let body = new PassThrough();

					responseHeaders.set("Content-Type", "text/html");

					cors(
						request,
						new Response(new ReadableStream({
							start(controller) {
								body.on('data', chunk => controller.enqueue(chunk));
								body.on('end', () => controller.close());
								body.on('error', err => controller.error(err));
							}
						}), {
							headers: responseHeaders,
							status: didError ? 500 : responseStatusCode,
						}),
					).then((response) => {
						resolve(response);
					});

					pipe(body);
				},
				onShellError: (err: unknown) => {
					reject(err);
				},
				onError: (error: unknown) => {
					didError = true;

					console.error(error);
				},
			},
		);

		setTimeout(abort, ABORT_DELAY);
	});
}

export let handleDataRequest: HandleDataRequestFunction = async (
	response,
	{ request },
) => {
	return await cors(request, response);
};