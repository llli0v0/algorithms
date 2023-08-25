import pandas as pd

def gameplay_analysis(activity: pd.DataFrame) -> pd.DataFrame:
    activity['first'] = activity.groupby('player_id').event_date.transform(min)
    activity_2nd = activity.loc[activity['first'] + pd.DateOffset(1) == activity['event_date']]
    return pd.DataFrame({'fraction': [round(len(activity_2nd) / len(activity.player_id.unique()), 2)]})
