package baekjoon;

import java.io.IOException;
import java.util.LinkedList;
import java.util.Scanner;

public class no_10845 {

  public static void main(String[] args) throws IOException {
    try (Scanner sc = new Scanner(System.in)) {
      // Queue는 인터페이스라서 LinkedList로 구현
      LinkedList<Integer> qu = new LinkedList<>();
      StringBuilder sb = new StringBuilder();
      int num = sc.nextInt();

      for (int i = 0; i < num; i++) {
        String command = sc.next();

        switch (command) {
          case "push":
            // 숫자 부분만 따로 떼어냄
            int input = sc.nextInt();
            qu.add(input);
            break;
          case "pop":
            if (qu.isEmpty()) {
              sb.append(-1).append("\n");
            } else {
              sb.append(qu.removeFirst()).append("\n");
            }
            break;
          case "size":
            sb.append(qu.size()).append("\n");
            break;
          case "empty":
            if (qu.isEmpty()) {
              sb.append(1).append("\n");
            } else {
              sb.append(0).append("\n");
            }
            break;
          case "front":
            if (qu.isEmpty()) {
              sb.append(-1).append("\n");
            } else {
              sb.append(qu.peekFirst()).append("\n");
            }
            break;
          case "back":
            if (qu.isEmpty()) {
              sb.append(-1).append("\n");
            } else {
              sb.append(qu.peekLast()).append("\n");
            }
            break;
        }
      }
      System.out.print(sb);
    }
  }
}
