import { SafeAuthKit, Web3AuthModalPack } from '@safe-global/auth-kit';
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base';
import { Web3AuthOptions } from '@web3auth/modal';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';

// https://dashboard.web3auth.io/
const WEB3_AUTH_CLIENT_ID=process.env.REACT_APP_WEB3_AUTH_CLIENT_ID!

// https://web3auth.io/docs/sdk/web/modal/initialize#arguments
const options: Web3AuthOptions = {
  clientId: BHuNueGvn-SQt72qUSh_AJ5Fe6XHj0k58fZmVN4Kc8DMe7KVH5eZwXxRw_7AiLyr93nDkNUm8bK47TdHlQ-7o8g,
  web3AuthNetwork: 'testnet',
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x5',
    // https://chainlist.org/
    rpcTarget: `https://rpc.ankr.com/eth_goerli`
  },
  uiConfig: {
    theme: 'dark',
    loginMethodsOrder: ['google', 'facebook']
  }
}

// https://web3auth.io/docs/sdk/web/modal/initialize#configuring-adapters
const modalConfig = {
  [WALLET_ADAPTERS.TORUS_EVM]: {
    label: 'torus',
    showOnModal: false
  },
  [WALLET_ADAPTERS.METAMASK]: {
    label: 'metamask',
    showOnDesktop: true,
    showOnMobile: false
  }
}

// https://web3auth.io/docs/sdk/web/modal/whitelabel#whitelabeling-while-modal-initialization
const openloginAdapter = new OpenloginAdapter({
  loginSettings: {
    mfaLevel: 'mandatory'
  },
  adapterSettings: {
    uxMode: 'popup',
    whiteLabel: {
      name: 'Safe'
    }
  }
})

const pack = new Web3AuthModalPack(options, [openloginAdapter], modalConfig)

const safeAuthKit = await SafeAuthKit.init(pack, {
  txServiceUrl: 'https://safe-transaction-goerli.safe.global'
})