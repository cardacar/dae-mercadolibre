import {createContext} from 'react'

export const InitialContext = createContext(null)

export const initialState = {
    searchInputText: "",
    allProducts: [],
    detailProduct: {}
  }