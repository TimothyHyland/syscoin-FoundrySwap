import { ChainId } from 'syscoin-swap'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.NEVM]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.TANENBAUM]: '0x82098E841BD758aF5a5c05C119891a97c9848CB7'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
