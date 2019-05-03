
# # [2000,6000,800,700,1200,1000,1300,600]
maxTaille = 1500
TabTaille = [700,800]
complete_list = []
tabOk = []
tabKo = []

for current in xrange(2):
    a = [i for i in TabTaille]
    print("1 ==> ",a)
    for y in xrange(current):
        a = [x+i for i in TabTaille for x in a]
        complete_list = complete_list+a
        print("calcule  ==>", complete_list)

        for data in complete_list : 
            if data < 1500 : 
                tabOk.append(data)
            else :
                tabKo.append(data)

print("tabOk ==>", tabOk)
print("===========================================")
print("tabKo <==", tabKo)


