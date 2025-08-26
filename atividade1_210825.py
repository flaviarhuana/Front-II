altura = []
genero = []

total_h_m = 0
cont_masculino = 0
cont_feminino = 0

for i in range(1, 16):
    print(f"\n--- Coleta de dados da pessoa {i} de 15:")

    while True:
        try:
            height = float(input("Digite sua altura: "))
            if height > 0:
                altura.append(height)
                break
            else:
                print("Altura inválida.")
        except ValueError:
            print("Entrada inválida. Por favor, digite um número.")

    while True:
        gen = input("Digite o gênero Masculino ou Feminino): ").upper()
        if gen in ['MASCULINO', 'FEMININO']:
            genero.append(gen)
            break
        else:
            print("Gênero inválido.")

# Encontrando a maior e menor altura do grupo

if altura:
    maior_altura = altura[0]
    menor_altura = altura[0]
else:
    maior_altura = 0
    menor_altura = 0

for i in range(len(altura)):
    if altura[i] > maior_altura:
        maior_altura = altura[i]
    if altura[i] < menor_altura:
        menor_altura = altura[i]

# Contabilizando os dados para a média e a contagem de mulheres
    if genero[i] == 'MASCULINO':
        total_h_m += altura[i]
        cont_masculino += 1
    elif genero[i] == 'FEMININO':
        cont_feminino += 1

print("RESULTADOS DA LISTA")

print(f"1. A maior altura do grupo é: {maior_altura:.2f} metros")
print(f"2. A menor altura do grupo é: {menor_altura:.2f} metros")

#Calculando e mostrando a média de altura dos homens
if cont_masculino > 0:
    media_masculino = total_h_m / cont_masculino
    print(f"3. A média de altura das pessoas do gênero Masculino é: {media_masculino:.2f} metros")
else:
    print("3. Nenhuma pessoa do gênero Masculino foi registrada.")

# Mostrando o número de mulheres
print(f"4. O número de pessoas do gênero Feminino é: {cont_feminino}")