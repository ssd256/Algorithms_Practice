package baekjoon;

import java.util.Scanner;

public class no_1330 {

  public static void main(String[] args) {
    try (Scanner sc = new Scanner(System.in)) {
      int A = sc.nextInt();
      int B = sc.nextInt();

      // 방법 1
      if (A > B) System.out.println(">"); // if문이 한줄이면 {} 생략 가능
      else if (A < B) System.out.println("<"); else System.out.println("==");

      // 방법 2
      // 삼항연산자로도  str에 안 넣고 바로 출력
      String str = A > B ? ">" : (A < B ? "<" : "==");
      System.out.println(str);
    }
  }
}
