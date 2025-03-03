

// function mergeBack(sortArray, low, mid, high, updatedlist){
//     let temprory = [], i = low, j = mid + 1;

//     while(i <= mid && j <= high){
//         if(sortArray[i] <= sortArray[j]){
//             temprory.push(sortArray[i++]);
//         }
//         else{
//             temprory.push(sortArray[j++]);
//         }
//     }

//     while(i <= mid){
//         temprory.push(sortArray[i++]);
//     }

//     while(j <= high){
//         temprory.push(sortArray[j++]);
//     }
    
//     function updating(i){
//         if(i < temprory.length){
//             sortArray[i + low] = temprory[i];
//             updatedlist([...sortArray], [low + i]);
//             setTimeout(() => updating(i + 1), 100);
//         }
//     }

//     updating(0);
// }

// function sorting(sortArray, low, high, updatedlist){

//     if(low < high){
//         let mid = Math.floor((low + high) / 2);

//         sorting(sortArray, low, mid, updatedlist);
//         sorting(sortArray, mid + 1, high, updatedlist);

//         mergeBack(sortArray, low, mid, high, updatedlist);
//     }
// }

// export default function MergeSort(array, updateList){
//     let sortArray = [...array];
//     sorting(sortArray, 0, sortArray.length - 1, updateList);
// }



function mergeBack(sortArray, low, mid, high, updatedlist, callback) {
    let temporary = [], i = low, j = mid + 1;

    while (i <= mid && j <= high) {
        if (sortArray[i] <= sortArray[j]) {
            temporary.push(sortArray[i++]);
        } else {
            temporary.push(sortArray[j++]);
        }
    }

    while (i <= mid) {
        temporary.push(sortArray[i++]);
    }

    while (j <= high) {
        temporary.push(sortArray[j++]);
    }

    function updating(index) {
        if (index < temporary.length) {
            sortArray[low + index] = temporary[index];
            updatedlist([...sortArray], [low + index]);
            setTimeout(() => updating(index + 1), 250);
        } else {
            callback(); // Continue sorting after updates
        }
    }

    updating(0);
}

function sorting(sortArray, low, high, updatedlist, callback) {
    if (low < high) {
        let mid = Math.floor((low + high) / 2);

        sorting(sortArray, low, mid, updatedlist, () => {
            sorting(sortArray, mid + 1, high, updatedlist, () => {
                mergeBack(sortArray, low, mid, high, updatedlist, callback);
            });
        });
    } else {
        callback(); // If only one element, continue
    }
}

export default function mergeSort(array, updateList) {
    let sortArray = [...array];
    sorting(sortArray, 0, sortArray.length - 1, updateList, () => {});
}
