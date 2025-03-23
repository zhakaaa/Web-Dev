def cigar_party(cigars, is_weekend):
    if is_weekend:
        return cigars >= 40
    return 40 <= cigars <= 60

cigars = int(input())
is_weekend = input().lower() == 'true'
print(cigar_party(cigars, is_weekend))