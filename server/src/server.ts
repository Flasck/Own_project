import * as http from "http";
import { Api } from "./api";
import "./routes";

const headers = {
	"Content-Type": "application/json",
	"Access-Control-Allow-Origin": "*"
};

const server = http.createServer(async (req, res) =>
{
	try
	{
		const apiRes = await Api.process(req.url || "");
		res.writeHead(apiRes.status, headers);
		res.write(apiRes.body);
	}
	catch (e)
	{
		console.log(`Path: ${req.url}`);
		console.log(e);
		res.writeHead(500, headers);
		res.write("Server error");
	}
	res.end();
});

Api.PrettyPrint = process.env.DEV?.trim() == "1";
const port = 3001;
console.log(`Start server on http://localhost:${port}`);
server.listen(port);
