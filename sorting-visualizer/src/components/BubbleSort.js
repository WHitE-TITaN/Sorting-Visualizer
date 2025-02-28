export default function BubbleSort(bar, updatestate) {
    let newSortState = [...bar];
    let sizeofArr = newSortState.length;

    let i = 0, j = 0;
    
    function set() {
        if (i < sizeofArr - 1) {  
            if (j < sizeofArr - i - 1) { 
                if (newSortState[j] > newSortState[j + 1]) {
                    let temp = newSortState[j];
                    newSortState[j] = newSortState[j + 1];
                    newSortState[j + 1] = temp;

                    updatestate([...newSortState], [j, j + 1]);
                }
                j++;
                setTimeout(set, 100);
            } else {
                j = 0;
                i++;
                setTimeout(set, 100);
            }
        }
    }
    
    set();
}
