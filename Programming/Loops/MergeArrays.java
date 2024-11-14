import java.util.Arrays;

public class MergeArrays {
    public static int[] merge(int[] arr1, int[] arr2) {
        int n1 = arr1.length;
        int n2 = arr2.length;
        int[] mergedArray = new int[n1 + n2]; // Result array to hold merged values
        int i = 0, j = 0, k = 0;

        // Merge both arrays
        while (i < n1 && j < n2) {
            if (arr1[i] < arr2[j]) {
                mergedArray[k++] = arr1[i++];
            } else {
                mergedArray[k++] = arr2[j++];
            }
        }

        // If there are remaining elements in arr1
        while (i < n1) {
            mergedArray[k++] = arr1[i++];
        }

        // If there are remaining elements in arr2
        while (j < n2) {
            mergedArray[k++] = arr2[j++];
        }

        return mergedArray;
    }

    public static void main(String[] args) {
        int[] arr1 = { 1, 3, 5, 7 };
        int[] arr2 = { 2, 4, 6, 8 };

        int[] mergedArray = merge(arr1, arr2);

        System.out.println("Merged array: " + Arrays.toString(mergedArray));
        // Output: Merged array: [1, 2, 3, 4, 5, 6, 7, 8]
    }
}
