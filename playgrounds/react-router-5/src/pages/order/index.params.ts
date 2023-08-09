export default interface Params {
  /** 这是订单id */
  order_id: string
  /** 随便写的订单类型 */
  enter_order_type: 'OPEN' | 'TO' | 'REPLACE'
  customer_names: string[]
  type?: 1 | 2
  isAuto?: boolean
}
