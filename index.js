// code your solution here
function saturdayFun(activity){
    if (activity === undefined){
        activity = 'roller-skate'
    }
    return `This Saturday, I want to ${activity}!`;
};
const mondayWork = function(activity){
    if (activity === undefined){
        activity = 'go to the office';
    }
    return `This Monday, I will ${activity}.`;
};
function wrapAdjective(wrapper){
    if (wrapper === undefined){
        wrapper = '*';
    }
    return function(adj){
        if (adj === undefined){
            adj = 'special';
        }
        return `You are ${wrapper}${adj}${wrapper}!`;
    }
}
