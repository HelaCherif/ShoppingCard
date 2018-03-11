import React from "react";
import { createStore } from "redux";
import { combineReducers } from "react-redux";

const productReducer = (state, action) => {
  if (action.type === "TRY_ADD_PRODUCT_TO_CART") {
    return state.map(product => {
      if (product.name === action.name && product.quantity > 0) {
        product.quantity--;
        dispatchEvent({
          type: "ADD_PRODUCT_TO_CART",
          value: product
        });
      }
    });
  }
  if (action.type === "CLEAR_CART") {
    state.map(card => {
      state.map(product => {
        if (product.name === card.name) {
          product.quantity += card.quantity;
        }
      });
    });
  }
  return state;
};

const cardReducer = (state, action) => {
  if (action.type === "ADD_PRODUCT_TO_CART") {
    return state.map(product => {
      if (product.name === action.value.name) {
        product.quantity++;
      } else {
        state.concat(product);
      }
    });
  }
  if (action.type === "CLEAR_CART") {
    state.cardList.map(card => {
      state.productList.map(product => {
        if (product.name === card.name) {
          product.quantity += card.quantity;
        }
      });
    });
    state.cardList = [];
    state.total = 0;
  }
  return state;
};

const defaultState = { product: [], card: [] };

const handleTryAddToCart = (state, action) => {
  return globalReducer(state, "ADD_TO_CART");
};

const globalReducer = (state = defaultState, action) => {
  if (action.type === "TRY_ADD_TO_CART") {
    return handleTryAddToCart(state, action);
  }
  return {
    product: productReducer(state.product, action),
    card: cardReducer(state.card, action)
  };
};

const store = createStore(globalReducer);

export default store;
