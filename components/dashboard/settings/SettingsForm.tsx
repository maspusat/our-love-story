"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

import { updateSettings } from "@/lib/actions/settings";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Settings = {
  id: string;
  website_title: string | null;
  groom_name: string | null;
  bride_name: string | null;
  tagline: string | null;

  story_title: string | null;
  story_description: string | null;

  anniversary: string | null;
  birthday_groom: string | null;
  birthday_bride: string | null;

  music_url: string | null;
  music_title: string | null;
  music_artist: string | null;

  theme_color: string | null;

  hero_image: string | null;
};

type Props = {
  settings: Settings;
};

export default function SettingsForm({
  settings,
}: Props) {
  const [loading, setLoading] =
    useState(false);

  async function submit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const formData = new FormData(
      e.currentTarget
    );

    try {
      setLoading(true);

      await updateSettings(formData);

      toast.success(
        "Settings berhasil disimpan ❤️"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Gagal menyimpan settings."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Website Settings
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={submit}
          className="space-y-6"
        >
          <input
            type="hidden"
            name="id"
            defaultValue={settings.id}
          />

          <input
            type="hidden"
            name="old_image"
            defaultValue={
              settings.hero_image ?? ""
            }
          />

          <input
            type="hidden"
            name="old_music"
            defaultValue={
              settings.music_url ?? ""
            }
          />

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Website Title
              </label>

              <Input
                name="website_title"
                defaultValue={
                  settings.website_title ?? ""
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Theme Color
              </label>

              <Input
                name="theme_color"
                defaultValue={
                  settings.theme_color ?? ""
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Groom Name
              </label>

              <Input
                name="groom_name"
                defaultValue={
                  settings.groom_name ?? ""
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Bride Name
              </label>

              <Input
                name="bride_name"
                defaultValue={
                  settings.bride_name ?? ""
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Anniversary
              </label>

              <Input
                type="date"
                name="anniversary"
                defaultValue={
                  settings.anniversary ?? ""
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Birthday Groom
              </label>

              <Input
                type="date"
                name="birthday_groom"
                defaultValue={
                  settings.birthday_groom ?? ""
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Birthday Bride
              </label>

              <Input
                type="date"
                name="birthday_bride"
                defaultValue={
                  settings.birthday_bride ?? ""
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Background Music
              </label>

              <Input
                type="file"
                name="music"
                accept=".mp3,audio/*"
              />

              {settings.music_url && (
                <audio
                  controls
                  className="mt-4 w-full"
                  src={settings.music_url}
                />
              )}
            </div>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Music Title
              </label>

              <Input
                name="music_title"
                placeholder="Until I Found You"
                defaultValue={
                  settings.music_title ?? ""
                }
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Music Artist
              </label>

              <Input
                name="music_artist"
                placeholder="Stephen Sanchez"
                defaultValue={
                  settings.music_artist ?? ""
                }
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Tagline
            </label>

            <Textarea
              name="tagline"
              rows={4}
              defaultValue={
                settings.tagline ?? ""
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Story Title
            </label>

            <Input
              name="story_title"
              placeholder="Every Love Has A Beginning"
              defaultValue={
                settings.story_title ?? ""
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Story Description
            </label>

            <Textarea
              name="story_description"
              rows={6}
              placeholder="Tuliskan cerita perjalanan cinta kalian..."
              defaultValue={
                settings.story_description ?? ""
              }
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Hero Image
            </label>

            <Input
              type="file"
              name="hero_image"
              accept="image/*"
            />
          </div>

          {settings.hero_image && (
            <div>
              <Image
                src={settings.hero_image}
                alt="Hero Image"
                width={240}
                height={240}
                className="rounded-2xl object-cover"
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading
              ? "Menyimpan..."
              : "Simpan Perubahan"}
          </Button>

        </form>
      </CardContent>
    </Card>
  );
}