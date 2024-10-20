// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { MongoClient } from 'mongodb'

declare global {
  var _mongoClientPromise: Promise<MongoClient>

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
 
		interface Locals {
			user: import("lucia").User | null;
			session: import("lucia").Session | null;
		}
	}
}

export {};
