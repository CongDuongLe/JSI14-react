// convert this code to c++
//if(value) return { "exio_relay_1": 1 };
// else return { "exio_relay_1": 0 };


#include <iostream>
#include <string>
#include <map>
using namespace std;

int main()
{
    int value = 1;
    map<string, int> m;
    if(value) m["exio_relay_1"] = 1;
    else m["exio_relay_1"] = 0;
    cout << m["exio_relay_1"];
    return 0;
}


