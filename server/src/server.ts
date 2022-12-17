import * as http from "http";
import { Api } from "./api";
import "./routes";

const headers = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Headers": "Content-Type",
};

const server = http.createServer(async (req, res) =>
{
	try
	{
		const apiRes = await Api.process(req);
		res.writeHead(apiRes.status, { ...headers, ...apiRes.headers, "Content-Type": apiRes.type });
		res.write(apiRes.body);
	}
	catch (e)
	{
		console.log(`Path: ${req.url}`);
		console.log(e);
		res.writeHead(500, { ...headers, "Content-Type": "application/json" });
		res.write(`"Server error"`);
	}
	if (delay) await wait(Math.random() * 500 + 2000);
	res.end();
});

Api.PrettyPrint = process.argv.indexOf("-dev") >= 0;
const delay = process.argv.indexOf("-delay") >= 0;

const port = 3001;
console.log(`Start server on http://localhost:${port}`);
server.listen(port);


function wait(t: number)
{
	return new Promise(r => setTimeout(r, t));
}
