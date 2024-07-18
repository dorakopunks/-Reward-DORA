import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "<0x45Ca84E29d82495687bCDd8fE8Cb748251bD93F2>";
const rewardTokenContractAddress = "<0xf941fed95a8e0167fb4c14ce8f3343afcfb1fece>";
const stakingContractAddress = "<0x1a0E661f3b92B92DdF2fc0193b10f38Ac69380f7>";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});