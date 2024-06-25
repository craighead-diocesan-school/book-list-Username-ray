import { writable } from 'svelte/store'

// creates a new shared writable variable called 'name' with the initial value of 'undefined'
export const name = writable(undefined)