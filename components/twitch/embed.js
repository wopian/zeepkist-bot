import { formatDistanceToNowStrict } from 'date-fns';
import { EmbedBuilder } from 'discord.js';
import { formatOrdinal } from '../../utils/index.js';
export const twitchEmbed = (stream, streamsThisMonth) => {
    const ordinalStreams = formatOrdinal(streamsThisMonth);
    const streamingFor = formatDistanceToNowStrict(new Date(stream.startDate));
    const title = `${stream.userDisplayName} is streaming ${stream.gameName}!`;
    let description = stream.viewers > 0
        ? `Streaming for ${streamingFor} with ${stream.viewers} viewers.`
        : `Just started streaming.`;
    description += `\nCome say hi in their ${ordinalStreams} stream this month!!`;
    const embed = new EmbedBuilder()
        .setTitle(title)
        .setDescription(description)
        .setURL(`https://twitch.tv/${stream.userName}`)
        .setColor('#6441a5')
        .setTimestamp(stream.startDate)
        .setThumbnail('https://res.cloudinary.com/startup-grind/image/upload/c_fill,f_auto,g_center,q_auto:good/v1/gcs/platform-data-twitch/contentbuilder/community-meetups_event-thumbnail_400x400.png')
        .setImage(`${stream.getThumbnailUrl(1280, 720)}?${stream.startDate.getTime()}`);
    return embed;
};