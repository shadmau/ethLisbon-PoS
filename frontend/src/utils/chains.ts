type Chain = 'optmism-goerli' | 'goerli' | 'polygon-mumbai' | 'gnosis'

type ChainOptions = {
    [k in Chain]: {
        chainId: string
        rpcTarget: string
    }
}

export const chainsList: ChainOptions = {
    'optmism-goerli': {
        chainId: '0x1a4',
        rpcTarget: 'https://opt-mainnet.g.alchemy.com/v2/3blLI2e6k8aY5ZHikMrg_pyX0kdLRX8f'
    },
    'goerli': {
        chainId: '0x5',
        rpcTarget: 'https://eth-goerli.g.alchemy.com/v2/1M1BRjOvJuHPZsKKY0_wwBCadNswgNti'
    },
    'polygon-mumbai': {
        chainId: '0x13881',
        rpcTarget: 'https://polygon-mumbai.g.alchemy.com/v2/9PZhv85HtihaJ3KSIsPX282e9BkrehKH'
    },
    'gnosis': {
        chainId: '0x64',
        rpcTarget: 'https://rpc.ankr.com/gnosis'
    },
}

export const DEFAULT_CHAIN = chainsList['gnosis']