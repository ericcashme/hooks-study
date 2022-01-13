import { gql } from '@apollo/client';

const QUERY = gql`
  query HomePricing($id: UUID!, $period: BookingPeriod!, $coupon: String) {
    homesPricing(ids: [$id], period: $period, coupon: $coupon) {
      homeId
      numberOfNights
      total
    }
  }
`;

export default QUERY;
