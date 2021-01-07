package baekjoon;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class no_20223 {
	public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int a = Integer.parseInt(br.readLine()); // month-cost
        int x = Integer.parseInt(br.readLine()); // time-cost
        int b = Integer.parseInt(br.readLine()); // month-cost
        int y = Integer.parseInt(br.readLine()); // time-cost
        int t = Integer.parseInt(br.readLine()); // time

        int xCost = calCost(a, 0, x, t);
        int yCost = calCost(0, b, y, t);

        System.out.print(xCost + " " + yCost);
    }

	public static int calCost(int xCost, int yCost, int tCost, int time) {
		// use 21 days
		int sum = 0;

		// every day, first 30 minutes is free
		// every minute above that costs x 
		if(xCost > 0 && yCost == 0) {
			if(time < 31) {
				sum = xCost;
			} else {
				sum = xCost + (tCost * (time-30) * 21);
			}
		// every day, first 45 minutes is free
		// every minute above that costs y	
		} else {
			if(time < 46) {
				sum = yCost;
			} else {
				sum = yCost + (tCost * (time-45) * 21);
			}
		}

		return sum;
	}
}
