def check_ingredient_match(recipe, inventory):
    missing = []
    count = 0
    for item in recipe:
        if item not in inventory:
            missing.append(item)
        elif item in inventory:
            count += 1
    percentage = (count) / len(recipe) * 100
    return percentage, missing

def filter_messages(messages):
    filtered_message = []
    count_of_dang_removed = []

    for message in messages:
        splitted_message = message.split()
        good_words = []
        bad_words = 0
        for word in splitted_message:
            if word == "dang":
                bad_words += 1
            else:
                good_words.append(word)
        joined_message = " ".join(good_words)
        filtered_message.append(joined_message)
        count_of_dang_removed.append(bad_words)
    return filtered_message, count_of_dang_removed


#zadanie Iterating over dictionary in python

def get_most_common_enemy(enemies_dict):
    max_so_far = float("-inf")
    enemy_name = None
    for enemy in enemies_dict:
        if enemies_dict[enemy] == 0:
            max_so_far = None
        elif enemies_dict[enemy] > max_so_far:
            max_so_far = enemies_dict[enemy]
            enemy_name = enemy
    return enemy_name, max_so_far

def merge_dict(dict1, dict2):
    new_dict = {}
    for item in dict1:
        new_dict[item] = dict1[item]
    for item in dict2:
        new_dict[item] = dict2[item]
    return new_dict


def count_vowels(text):
    set_of_vowels = {"a", "A", "e", "E", "i", "I", "o", "O", "u", "U"}
    counter = 0
    set_for_unique_vowels = set()
    for letter in text:
            if letter in set_of_vowels:
                counter += 1
                set_for_unique_vowels.add(letter)
    return counter, set_for_unique_vowels
                

print(count_vowels("Hello world my name is Robert Adami"))