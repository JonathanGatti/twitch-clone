import React from 'react';

interface SignAction {
  type: string,
}

export const signInAction = (): SignAction => {
  return {
    type: 'SIGN_IN',
  }
}

export const signOutAction = (): SignAction => {
  return {
    type: 'SIGN_OUT',
  }
}