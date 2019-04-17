let nextTodoId = 0;

export const addTodo = (text) =>{
	return{
		type:"Add_TODO",
		id: nextTodoId,
		text
	}
}

export const toggleTodo = (id) =>{
	return{
		type:"TOGGLE_TODO",
		id
	}
}

export const setVisibility = (filter) =>{
    return{
		type:"SET_VISIBILITY",
		filter
	}
}
