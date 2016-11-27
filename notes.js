pipeManager as pm

//orderBy is a pipe
//orderByTap is a tap
pm.orderByDynamic = new ng2-pipeline(orderBy, orderByTap) 

//orderBy => orderByDynamic.pipe
//orderByTap => orderByDynamic.tap
//orderByTap.params => orderByDynamic.params

{{data | pm.orderByDynamic.pipe}}

is like

{{data | pm.orderByDynamic.pipe : pm.orderByDynamic.params }}

pm.orderByDynamic.tap is holding the logic foe changing the params