import pandas as pd

def trips_and_users(trips: pd.DataFrame, users: pd.DataFrame) -> pd.DataFrame:
    df = trips[trips['request_at'].between('2013-10-01', '2013-10-03')].rename(columns={'request_at': 'Day'})
    banned_set = set(users[users['banned'] == 'Yes']['users_id'].tolist())
    df = df[(~df['client_id'].isin(banned_set)) & (~df['driver_id'].isin(banned_set))]
    df['status_cancelled'] = df['status'].str.contains('cancelled')
    df = df.groupby('Day', as_index=False).agg({'status_cancelled': 'mean'}).rename(columns={'status_cancelled': 'Cancellation Rate'})
    df['Cancellation Rate'] = df['Cancellation Rate'].round(2)
    return df
