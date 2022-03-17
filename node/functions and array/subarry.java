import java.io.*;
import java.util.*;
public class Main{
    public static void main(String[] args) {
        Scanner scn=new Scanner(System.in);
        int n=scn.nextInt();
        int[] arr = new int[n];
        for(int i =0; i<arr.length; i++)
        
            public static int binarySearch(int arr[], int k)
            {
                int st=0, ed=arr.length-1;
                while(st<=ed){
                    int mid=(st+ed)/2;{
                        if(arr[mid]<k)
                        {
                        st=mid+1;
                        }
                        else if(arr[mid]>k)
                        {
                            st=mid-1;
                        }
                        else{
                            return mid;
                        }
                }
            return -1;
            }
