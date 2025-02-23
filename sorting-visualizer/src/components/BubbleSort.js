

export default function BubbleSort(bar, updatestate) {
    let newSortState = [...bar];
    /*for (let i = 0; i < newSortState.length; i++) {
        for (let j = 1; j < newSortState.length; j++) {
            if (newSortState[j - 1] > newSortState[j]) {
                let temp = newSortState[j - 1];
                newSortState[j - 1] = newSortState[j];
                newSortState[j] = temp;
            }
            updatestate(newSortState);
        }
    }*/


    let i = 0, j = 1;
    function set(){
        if(i < newSortState.length){
            if(j < newSortState.length){

                updatestate([...newSortState], [j - 1, j]);

                if(newSortState[j - 1] > newSortState[j]){
                    let temp = newSortState[j];
                    newSortState[j] = newSortState[j - 1];
                    newSortState[j - 1] = temp;

                    updatestate([...newSortState], [j - 1, j]);
                }
                j++;
                
            }else{
                i++;
                j = 1;
            }
            setTimeout(set, 100);
        }
    }
    set()
}