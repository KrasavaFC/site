/// <reference types="@sveltejs/kit" />

declare namespace App {
  interface Locals {
    user?: {
      id: string;
      email: string;
    };
  }
}

export {};
