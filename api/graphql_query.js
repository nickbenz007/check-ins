import {gql} from '@apollo/client';

export const CHECK_INS_DATA = gql`
  query GetCheckIn {
    check_in {
      id
      name
      comment
      image_url
      created_at
      updated_at
    }
  }
`;

export const INSERT_CHECKIN = gql`
  mutation MyMutation($check_ins: [check_in_insert_input!]!) {
    insert_check_in(objects: $check_ins) {
      affected_rows
      returning {
        id
        name
        comment
        created_at
        updated_at
      }
    }
  }
`;
