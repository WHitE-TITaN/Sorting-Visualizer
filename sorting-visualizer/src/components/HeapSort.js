function heapify(arr, n, i, updateList, callback) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        updateList([...arr], [i, largest]);

        setTimeout(() => heapify(arr, n, largest, updateList, callback), 100);
    } else {
        callback && callback();
    }
}

function heapSort(arr, updateList) {
    let n = arr.length;

    function buildMaxHeap(index) {
        if (index >= 0) {
            heapify(arr, n, index, updateList, () => buildMaxHeap(index - 1));
        } else {
            extractElements(n - 1);
        }
    }

    function extractElements(index) {
        if (index >= 0) {
            [arr[0], arr[index]] = [arr[index], arr[0]];
            updateList([...arr], [0, index]);

            setTimeout(() => {
                heapify(arr, index, 0, updateList, () => extractElements(index - 1));
            }, 400);
        }
    }

    buildMaxHeap(Math.floor(n / 2) - 1);
}

export default function HeapSort(array, updateList) {
    let sortArray = [...array];
    heapSort(sortArray, updateList);
}
