import { Query } from './Query';
import { Subscription } from './Subscription';
import { auth } from './mutation/auth'

export default {
  Query,
  Mutation: {
    ...auth,
  },
  Subscription,
}