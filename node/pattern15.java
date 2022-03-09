import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        int n =scn.nextInt();
        int row =1;
        int nspaces = n/2;
        int nstars =1;
        int num =1;
    while ( row<=n ) {
        for( int i =1; i<=nspaces;i++)
        {
            System.out.print("\t");
        } int tmp = num;
        for (int i = 1; i <=nstars; i++) {
            System.out.print(tmp+"\t");
            if( i<= nstars/2){
                tmp++;
            }
            else
            {
                tmp--;
            }
        }System.out.println();

        if(row<=n/2){
            nspaces--;
            nstars+=2;
            num++;
        }
        else{
            nspaces++;
            nstars-=2;
            num++;
        }
        row++;
    }
    }
}