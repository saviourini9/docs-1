---
title: "How to get all transfers of an NFT collection"
slug: "../../how-to-get-all-transfers-of-an-nft-collection"
description: "Learn how to get all the transfers of an NFT collection using the Moralis NFT API."
sidebar_label: "Get NFT transfers by collection"
---

## Prerequisites

Before getting started, make sure you have the following ready:

- Node v.14+ or Python
- NPM/Yarn or Pip

## Step 1: Setup Moralis

import SetupMoralis from '/docs/partials/\_install-moralis-sdk.mdx';

<SetupMoralis node="moralis @moralisweb3/common-evm-utils" python="moralis" />

## Step 2: Get All Transfers Of An NFT Collection

In order to get all the transfers for an NFT collection, Moralis provides you with a[getNFTContractTransfers](/web3-data-api/evm/reference/get-nft-contract-transfers) endpoint.

Here, you'll need two parameters: `address` and `chain`.

Once you have obtained both the `address` and `chain`, you can copy the following code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="programming-language">
  <TabItem value="javascript" label="index.js (JavaScript)" default>

```javascript index.js
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTContractTransfers({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="typescript" label="index.ts (TypeScript)">

```typescript index.ts
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTContractTransfers({
    address,
    chain,
  });

  console.log(response.toJSON());
};

runApp();
```

</TabItem>
<TabItem value="python" label="index.py (Python)">

```python index.py
from moralis import evm_api

api_key = "YOUR_API_KEY"
params = {
    "address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "chain": "eth",
    "format": "decimal",
    #"limit": 100,
    #"cursor": "",
}

result = evm_api.nft.get_nft_contract_transfers(
    api_key=api_key,
    params=params,
)

print(result)
```

</TabItem>
</Tabs>

## Step 3: Run the script

import RunTheScript from '/docs/partials/\_run-the-script.mdx';

<RunTheScript />

In your terminal, you should see the following JSON response:

```json
{
  "total": 88322,
  "page": 0,
  "page_size": 100,
  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmRlciI6IkRFU0MiLCJvZmZzZXQiOjAsImxpbWl0IjozLCJ0b2tlbl9hZGRyZXNzIjoiMHhiYzRjYTBlZGE3NjQ3YThhYjdjMjA2MWMyZTExOGExOGE5MzZmMTNkIiwid2hlcmUiOnt9LCJwYWdlIjoxLCJrZXkiOiIxNTgyNzAwNy44OS4yMzAuMCIsInRvdGFsIjo4ODMyMiwiaWF0IjoxNjY2NzI5NTI5fQ.f3u98Vp_H6hwWC8DpjozJ_BIWrLo8C51Uxob-4MbVzM",
  "result": [
    {
      "block_number": "15827007",
      "block_timestamp": "2022-10-25T18:53:59.000Z",
      "block_hash": "0xfd5c0243a0fa0e84d1b488413ee4917646d156ed23246814ffe39ca28dc13f31",
      "transaction_hash": "0x7a75ba4f74058c3c9a0d4a65554477c9c08e33695002682ca463a9d0f52eed6e",
      "transaction_index": 89,
      "log_index": 235,
      "value": "0",
      "contract_type": "ERC721",
      "transaction_type": "Single",
      "token_address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "token_id": "2071",
      "from_address": "0x5f6ac80cdb9e87f3cfa6a90e5140b9a16a361d5c",
      "to_address": "0xdbfd76af2157dc15ee4e57f3f942bb45ba84af24",
      "amount": "1",
      "verified": 1,
      "operator": null
    },
    {
      "block_number": "15827007",
      "block_timestamp": "2022-10-25T18:53:59.000Z",
      "block_hash": "0xfd5c0243a0fa0e84d1b488413ee4917646d156ed23246814ffe39ca28dc13f31",
      "transaction_hash": "0x7a75ba4f74058c3c9a0d4a65554477c9c08e33695002682ca463a9d0f52eed6e",
      "transaction_index": 89,
      "log_index": 232,
      "value": "0",
      "contract_type": "ERC721",
      "transaction_type": "Single",
      "token_address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "token_id": "2071",
      "from_address": "0x70b97a0da65c15dfb0ffa02aee6fa36e507c2762",
      "to_address": "0x5f6ac80cdb9e87f3cfa6a90e5140b9a16a361d5c",
      "amount": "1",
      "verified": 1,
      "operator": null
    },
    {
      "block_number": "15827007",
      "block_timestamp": "2022-10-25T18:53:59.000Z",
      "block_hash": "0xfd5c0243a0fa0e84d1b488413ee4917646d156ed23246814ffe39ca28dc13f31",
      "transaction_hash": "0x7a75ba4f74058c3c9a0d4a65554477c9c08e33695002682ca463a9d0f52eed6e",
      "transaction_index": 89,
      "log_index": 230,
      "value": "0",
      "contract_type": "ERC721",
      "transaction_type": "Single",
      "token_address": "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
      "token_id": "2071",
      "from_address": "0x3b968d2d299b895a5fcf3bba7a64ad0f566e6f88",
      "to_address": "0x70b97a0da65c15dfb0ffa02aee6fa36e507c2762",
      "amount": "1",
      "verified": 1,
      "operator": null
    }
  ],
  "block_exists": true
}
```

Congratulations 🥳 You just got all the transfers for an NFT collection with just a few lines of code using the Moralis NFT API!

## API Reference

If you want to know more details on the endpoint and optional parameters, check out:

- [getNFTContractTransfers](/web3-data-api/evm/reference/get-nft-contract-transfers)

## Support

If you face any trouble following the tutorial, feel free to reach out to our community engineers in our [Discord](https://moralis.io/discord) or [Forum](https://forum.moralis.io) to get 24/7 developer support.
