const state = {
    chartOption: {
        colorList: ['#4f8af9', '#6ec71e', '#f56e6a', '#fc8b40', '#818af8', '#31c9d7', '#f35e7a', '#ab7aee', '#14d68b', '#edb00d'],
        dataZoom: [{
            bottom: '5%',
            type: 'slider',
            show: true,
            start: 60,
            end: 100,
            handleSize: 8,
            fillerColor: 'rgba(79,138,249,0.3)',
            handleStyle: {
                color: '#4f8af9'
            }
        },
            {
                type: 'inside',
                start: 60,
                end: 100
            }],
        lineTooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'line',        // 默认为直线，可选为：'line' | 'shadow'
                lineStyle: {
                    color: '#4f8af9'
                }
            }
        },
        barTooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            itemWidth: 16,
            itemHeight: 16,
        },
        grid: {
            top: 40,
            left: 0,
            right: 20,
            bottom: '6%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine: {show: false},
            splitArea: {show: false},
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        yAxis: {
            position: 'left',
            type: 'value',
            boundaryGap: 0,
            splitArea: {show: false},
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
        },
        lineItemStyle:{normal: {areaStyle: {type: 'default',opacity:0.08}}}

    }

}

const mutations = {
    DECREMENT_MAIN_COUNTER(state) {
        // state.main--
    },
    INCREMENT_MAIN_COUNTER(state) {
        // state.main++
    },
    SET_TIME_DATA(state, res) {
        state.timeData = res
    }
}

const actions = {
    someAsyncTask({commit}) {
        // do something async
        commit('INCREMENT_MAIN_COUNTER')
    },
    'SET_TIME_DATA': function ({commit}, res) {
        commit('SET_TIME_DATA', res)
    }
}

export default {
    state,
    mutations,
    actions,
    getters: {
        chartOption: state => {
            return state.chartOption
        }
    }
}
