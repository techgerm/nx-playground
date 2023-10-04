import Constants from 'expo-constants';
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@org/titan';

/**
 * A set of typesafe hooks for consuming your API.
 */
export const titan = createTRPCReact<AppRouter>();
export { type RouterInputs, type RouterOutputs } from '@org/titan';

/**
 * Extend this function when going to production by
 * setting the baseUrl to your production API URL.
 */
export const getBaseUrl = () => {
  /**
   * Gets the IP address of your host-machine. If it cannot automatically find it,
   * you'll have to manually set it. NOTE: Port 3000 should work for most but confirm
   * you don't have anything else running on it, or you'd have to change it.
   *
   * **NOTE**: This is only for development. In production, you'll want to set the
   * baseUrl to your production API URL.
   */

  const debuggerHost = Constants.expoConfig?.hostUri;
  const localhost = debuggerHost?.split(':')[0];

  if (!localhost) {
    // return "https://turbo.t3.gg";
    throw new Error(
      'Failed to get localhost. Please point to your production server.'
    );
  }

  return `http://${localhost}:3333`;
};
