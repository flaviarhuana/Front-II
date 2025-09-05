numaula = int(input('Digite o número de aulas: '))
numfalta = int(input('Digite o número de faltas: '))
p1 = float(input('Nota da primeira prova: '))
p2 = float(input('Nota da segunda prova: '))

freq = (numaula-numfalta)/numaula*100
media = (p1+p2)/2

if freq < 75:
    status = 'Reprovado por faltas'
    p_complementar = None
else:
    if media >= 7:
        status = 'Aprovado'
        p_complementar = None
    elif media >=5 and media < 7:
        p_complementar = float(input('Nota da prova complementar: '))
        new_media = (media + p_complementar) / 2
        if new_media >= 5:
            status = 'Aprovado após recuperação'
        else:
            status = 'Reprovado após recuperação'
    else:
        status = 'Reprovado'
        p_complementar = None

print('Resultados')
print(f'Número de aulas do semestre foi {numaula}')
print(f'Número de faltas no semestre foi {numfalta}')
print(f'Percentual da frequência do discente é {freq:.2f}%')
print(f'A primeira nota é {p1}')
print(f'A segunda nota é {p2}')

if p_complementar is None:
    print('Nota complementar não foi aplicada!')
else:
    print(f'Nota complementar é {p_complementar}')

print(f'Situação final do discente é {status}')
