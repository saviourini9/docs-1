---
title: Block filtering added to getNFTContractTransfers
authors:
  name: Reuben Salisbury
---

Block filtering has been aded to `getNFTContractTransfers` endpoint `/api/v2/nft/{address}/transfers` 🎛️

It's now possible to filter by blocks on the `getNFTContractTransfers` endpoint and fetch NFT contract transfers between two blocks, by specifying `from_block` & `to_block`.

Docs: [https://docs.moralis.io/reference/getnftcontracttransfers](https://docs.moralis.io/reference/getnftcontracttransfers)