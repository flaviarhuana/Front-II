lista_clientes = []
for i in range(5):
    print(f'Coletando dados dos clientes {i+1}: ')
    altura_cliente = float(input("Qual a sua altura?"))
    genero_cliente = input("Qual o seu gênero?")

    dados_cliente = [altura_cliente, genero_cliente]
    lista_clientes.append(dados_cliente)
    print('A lista dos clientes é: ')
    print(lista_clientes)

#Analisando o que possui maior e menor altura
mais_alto = lista_clientes[0]
maior_altura = lista_clientes[0][0]

for cliente in lista_clientes[1:]:
    altura_atual = cliente[0]

    if altura_atual>maior_altura:
        maior_altura = altura_atual
        mais_alto = cliente

        print('O cliente mais alto é: ', mais_alto)

mais_baixo = lista_clientes[0]
menor_altura = lista_clientes[0][0]

for cliente in lista_clientes[1:]:
    altura_atual = cliente[0]
    if altura_atual < menor_altura:
        menor_altura = altura_atual
        mais_baixo = cliente

print('O cliente mais baixo é: ', mais_baixo)

#Calculando a média das alturas
alturas = [cliente[0] for cliente in lista_clientes]

media_altura = sum(alturas) / len(alturas)

print(f'A média de altura dos clientes é: {media_altura:.2f}m')

#Quantas são do gênero feminino?

contador_feminino = 0

for cliente in lista_clientes:

    genero = cliente[1]

    if genero == 'feminino':
        contador_feminino += 1

print(f'Número de clientes do gênero feminino: {contador_feminino}')
