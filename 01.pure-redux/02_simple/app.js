// 定义 store 的初始状态（state）
const defaultState = {
    name: '图书馆'
};

// 定义 reducer 更新 store 中的状态
const reducer = (state, action) => {
    let result = state;

    switch (action.type) {
        case "RENAME":
            result.name = action.name;
            break;
        case "RENAME_WITH_CITY":
            result.name = action.data.city + action.data.name;
            break;
    }

    return result;
};

// 新建 store
const store = Redux.createStore(reducer, defaultState);

// store 订阅事件
store.subscribe(() => {
    const storeState = store.getState();

    console.log(JSON.stringify(storeState));
});

// store 发布事件（action）
store.dispatch({ type: 'RENAME', name: '高端大气上档次图书馆' });
store.dispatch({ type: 'RENAME_WITH_CITY', data: { city: '深圳市', name: '低调奢华有内涵图书馆' } });
store.dispatch({ type: 'UNKNOWN', name: '我要改名' });
