
#ifndef cheddar_generated_mp4parse_h
#define cheddar_generated_mp4parse_h


#ifdef __cplusplus
extern "C" {
#endif

#include <stdint.h>
#include <stdbool.h>

// THIS FILE IS AUTOGENERATED BY mp4parse-rust/build.rs - DO NOT EDIT

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

typedef enum mp4parse_error {
	MP4PARSE_OK = 0,
	MP4PARSE_ERROR_BADARG = 1,
	MP4PARSE_ERROR_INVALID = 2,
	MP4PARSE_ERROR_UNSUPPORTED = 3,
	MP4PARSE_ERROR_EOF = 4,
	MP4PARSE_ERROR_IO = 5,
} mp4parse_error;

typedef enum mp4parse_track_type {
	MP4PARSE_TRACK_TYPE_VIDEO = 0,
	MP4PARSE_TRACK_TYPE_AUDIO = 1,
} mp4parse_track_type;

typedef enum mp4parse_codec {
	MP4PARSE_CODEC_UNKNOWN,
	MP4PARSE_CODEC_AAC,
	MP4PARSE_CODEC_OPUS,
	MP4PARSE_CODEC_AVC,
	MP4PARSE_CODEC_VP9,
} mp4parse_codec;

typedef struct mp4parse_track_info {
	mp4parse_track_type track_type;
	mp4parse_codec codec;
	uint32_t track_id;
	uint64_t duration;
	int64_t media_time;
} mp4parse_track_info;

typedef struct mp4parse_codec_specific_config {
	uint32_t length;
	uint8_t const* data;
} mp4parse_codec_specific_config;

typedef struct mp4parse_track_audio_info {
	uint16_t channels;
	uint16_t bit_depth;
	uint32_t sample_rate;
	mp4parse_codec_specific_config codec_specific_config;
} mp4parse_track_audio_info;

typedef struct mp4parse_track_video_info {
	uint32_t display_width;
	uint32_t display_height;
	uint16_t image_width;
	uint16_t image_height;
} mp4parse_track_video_info;

typedef struct mp4parse_parser mp4parse_parser;

typedef struct mp4parse_io {
	intptr_t (*read)(uint8_t* buffer, uintptr_t size, void* userdata);
	void* userdata;
} mp4parse_io;

/// Allocate an `mp4parse_parser*` to read from the supplied `mp4parse_io`.
mp4parse_parser* mp4parse_new(mp4parse_io const* io);

/// Free an `mp4parse_parser*` allocated by `mp4parse_new()`.
void mp4parse_free(mp4parse_parser* parser);

/// Run the `mp4parse_parser*` allocated by `mp4parse_new()` until EOF or error.
mp4parse_error mp4parse_read(mp4parse_parser* parser);

/// Return the number of tracks parsed by previous `mp4parse_read()` call.
mp4parse_error mp4parse_get_track_count(mp4parse_parser const* parser, uint32_t* count);

/// Fill the supplied `mp4parse_track_info` with metadata for `track`.
mp4parse_error mp4parse_get_track_info(mp4parse_parser* parser, uint32_t track_index, mp4parse_track_info* info);

/// Fill the supplied `mp4parse_track_audio_info` with metadata for `track`.
mp4parse_error mp4parse_get_track_audio_info(mp4parse_parser* parser, uint32_t track_index, mp4parse_track_audio_info* info);

/// Fill the supplied `mp4parse_track_video_info` with metadata for `track`.
mp4parse_error mp4parse_get_track_video_info(mp4parse_parser* parser, uint32_t track_index, mp4parse_track_video_info* info);

mp4parse_error mp4parse_is_fragmented(mp4parse_parser* parser, uint32_t track_id, uint8_t* fragmented);



#ifdef __cplusplus
}
#endif


#endif