export const loadState =()=>{
    try {
        const serializedState =localStorage.getItem('todos')
        if(!serializedState){
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        console.error('Error loading state:', error)
        return undefined
    }
}

export const saveState=(state)=>{
    try {
        const serializedState=JSON.stringify(state)
        localStorage.setItem('todos',serializedState)
    } catch (error) {
        console.error('Error saving state:', error);
    }
}