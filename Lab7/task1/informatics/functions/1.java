import java.util.Scanner;

class Main {
    static int min(int a, int b, int c, int d) {
        int m = a;
        if (b < m) m = b;
        if (c < m) m = c;
        if (d < m) m = d;
        return m;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int d = sc.nextInt();
        System.out.println(min(a, b, c, d));
    }
}
