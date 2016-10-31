#include <iostream>
#include <cstdlib>
using namespace std;

int main(int argc, char* argv[])
{
	/*
	 * You can adjust the number of lines to make the file 
	 * with more accurate size. Currently the unit size is
	 * around 1M.
	 */
	int lines = 36539;
	cout << "<html><body>" << endl;
	for (int i = 0; i < lines * atoi(argv[1]); i++)
	{
		cout << "This is No." << i << " line. <br/>" << endl;
	}
	cout << "</body></html>" << endl;
}
