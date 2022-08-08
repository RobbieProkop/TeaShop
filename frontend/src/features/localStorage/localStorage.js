export const getItemsListFromStorage = () => {
  try {
    const itemListState = localStorage.getItem("itemsList");
    console.log(itemListState);
    if (itemListState === null) return [];
    return JSON.parse(itemListState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const saveItemsList = (state) => {
  try {
    const saveItemState = JSON.stringify(state);
    localStorage.setItem("itemsList", saveItemState);
  } catch (error) {
    console.error(error);
  }
};

export const getShippingFromStorage = () => {
  try {
    const shippingState = localStorage.getItem("shippingAddress");
    if (shippingState === null) return {};
    return JSON.parse(shippingState);
  } catch (error) {
    return undefined;
  }
};

export const loadState = () => {
  try {
    const getLocalState = localStorage.getItem("state");
    if (getLocalState === null) {
      return undefined;
    }
    return JSON.parse(getLocalState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const saveLocalState = JSON.stringify(state);
    localStorage.setItem("state", saveLocalState);
  } catch (error) {
    console.error(error);
  }
};
