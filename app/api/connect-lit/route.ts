import { NextResponse } from "next/server";
import { LitNodeClientNodeJs } from "@lit-protocol/lit-node-client-nodejs";
import { LitNetwork, LIT_RPC } from "@lit-protocol/constants";

export async function POST() {
    try {
        console.log("Server: Connecting to Lit...");
        const litNodeClient = new LitNodeClientNodeJs({
            litNetwork: LitNetwork.DatilDev,
            rpcUrl: LIT_RPC.CHRONICLE_YELLOWSTONE
        });

        await litNodeClient.connect();
        console.log("Server: Connected!");

        return NextResponse.json({
            message: "LitNodeClient connected successfully on server!",
        });

    } catch (error) {
        console.error("Server: Error connecting to LitNodeClient", error);
        return NextResponse.json(
            { message: "Failed to connect to LitNodeClient", error: error },
        );
    }
}
