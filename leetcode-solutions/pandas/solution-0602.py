import pandas as pd

def most_friends(request_accepted: pd.DataFrame) -> pd.DataFrame:
    friends_1 = request_accepted['requester_id'].value_counts().reset_index().rename(columns={'requester_id': 'id'})
    friends_2 = request_accepted['accepter_id'].value_counts().reset_index().rename(columns={'accepter_id': 'id'})
    friends = pd.concat([friends_1, friends_2], axis=0).rename(columns={'count': 'num'})
    return friends.groupby('id')['num'].sum().reset_index().sort_values('num', ascending=False).head(1)
